import { notification } from 'antd';

const successNotification = (description: string) => {
  notification.success({
    message: 'Success',
    description: description,
    duration: 10
  });
};

export default successNotification;
