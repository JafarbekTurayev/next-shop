import {useRouter} from "next/router";

const Name = () => {
    const router = useRouter();
    return (
        <div>
            {console.log(router)}
            {console.log(router.query)}
            {console.log(router.pathname)}
            <h1>{router.query.name} Page </h1>

            {/*MuhammadZohir qolgan cardlarni chizadi*/}
        </div>
    );
};

export default Name;