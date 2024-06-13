export const errorMapper = (status: number | string): string => {
  switch (status) {
    case 401:
      return 'Користувач не авторизований';
    case 422:
      return 'Невірно введені дані';
    case 'PARSING_ERROR':
      return 'Невірно введені дані';
    case 404:
      return 'Дані не знайдено';
    case 500:
      return "Помилка з'єднання з сервером";
    case 'FETCH_ERROR':
      return "Помилка з'єднання з сервером";
    default:
      return 'Сталася невідома помилка';
  }
};
