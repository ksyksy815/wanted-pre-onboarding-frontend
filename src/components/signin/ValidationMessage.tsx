type ValidationMessageProps = {
  message: string;
};

const ValidationMessage = ({ message }: ValidationMessageProps) => {
  return <div>{message}</div>;
};

export default ValidationMessage;
