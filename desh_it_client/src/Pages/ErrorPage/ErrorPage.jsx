import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div
            className="text-center text-white min-h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url("https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1762387200&v=beta&t=REpmuD079v2zeL6abmBTpKs3_aCCap9CjBPW6sJCYcE")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Link to="/">
                <button className="bg-orange-500 text-gray-100 font-medium px-5 cursor-pointer py-2 rounded-full hover:bg-orange-600 transition mt-64">
                    Back To Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;