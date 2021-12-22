export interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({message}) => {
    return (
        <div className="border rounded-xl bg-red-200 p-5">
            {message}
        </div>
    );
};

export default Error;