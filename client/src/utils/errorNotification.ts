import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

const errorNotification = (error: Error | AxiosError) => {
  let errorTitle = 'Error Detected';
  let errorDescription = 'There was an error, please contact support or try again';

  if (axios.isAxiosError(error)) {
    const { name, message } = error as AxiosError;
    if (name) {
      errorTitle = name;
    }
    if (message) {
      errorDescription = message;
    }
  }

  notification.error({
    message: errorTitle,
    description: errorDescription,
    duration: 10
  });
};

export default errorNotification;
