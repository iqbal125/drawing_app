import { notification } from 'antd';
import { AxiosError } from 'axios';

const errorNotification = (error: Error | AxiosError) => {
  const { response } = error as AxiosError;
  const { data } = response as any;
  const { type, message } = data || {};

  let errorTitle = type || 'Error Detected';
  let errorDescription = message || 'There was an error, please contact support or try again';

  notification.error({
    message: errorTitle,
    description: errorDescription,
    duration: 5
  });
};

export default errorNotification;
