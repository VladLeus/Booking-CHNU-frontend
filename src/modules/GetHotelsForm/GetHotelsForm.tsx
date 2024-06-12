import { useSearchCityQuery } from '@modules/GetHotelsForm/api/mapBox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GetHotelsSchema,
  getHotelsSchema,
} from '@modules/GetHotelsForm/schema';
import { useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import CustomButton from '@ui/CustomButton';
import SearchCity from '@ui/SearchCityAutocomplete';
import { useActions, useDebounce } from '@shared/hooks';
import { IFeature } from '@modules/GetHotelsForm/api/mapBox/types.ts';
import { Alert } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SearchIcon from '@mui/icons-material/Search';
import { useLazyGetHotelsQuery } from '@modules/GetHotelsForm/api/getHotels.api.ts';
import { HotelInfo } from '@shared/store/hotels/types.ts';

const GetHotelsForm = () => {
  const [search, setSearch] = useState<string>('');
  const debounced: string = useDebounce(search, 500);
  const {
    data: cities,
    isLoading,
    isError,
  } = useSearchCityQuery(debounced, {
    skip: debounced.length < 2,
  });
  const [options, setOptions] = useState<string[]>([]);
  const [getHotels, { isLoading: isHotelsLoading, isError: isHotelsError }] =
    useLazyGetHotelsQuery();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(getHotelsSchema),
    defaultValues: {
      city: '',
    },
  });
  const { setHotels, setCity } = useActions();

  useEffect(() => {
    if (debounced.length > 2 && cities) {
      const results: string[] = cities.map((city: IFeature) => city.text);
      setOptions(results);
    }
  }, [debounced, cities]);

  const onSubmit = useCallback(async (formData: GetHotelsSchema) => {
    const response = await getHotels(formData.city);
    if (response.data) {
      console.log(response.data);
      setHotels(response.data.data as HotelInfo[]);
      setCity(formData.city);
    } else if (response.error) {
      console.log(response.error);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ||
        (isHotelsLoading && (
          <Alert severity="info">Дані завантажуються...</Alert>
        ))}
      {isError ||
        (isHotelsError && (
          <Alert severity="error" variant="filled">
            Помилка завантаження даних...
          </Alert>
        ))}
      <Stack direction="row" gap={2} sx={{ p: 1, bgcolor: 'lightgray' }}>
        <SearchCity
          name="city"
          control={control}
          label="Знайти місто"
          options={options}
          error={!!errors.city}
          helperText={errors.city?.message || ''}
          handleChange={(e) => setSearch(e.target.value)}
          icon={LocationCityIcon}
        />
        <CustomButton
          type="submit"
          text="Пошук"
          variant="contained"
          color="primary"
          size="medium"
          icon={SearchIcon}
          sx={{ maxHeight: 40 }}
        />
      </Stack>
    </form>
  );
};

export default GetHotelsForm;
