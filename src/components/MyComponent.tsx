import {FC, ReactNode} from "react";

type MyComponentPropType = {
    text:string,
    children?:ReactNode,
}

const MyComponent: FC<MyComponentPropType> = ({text, children}) => {
    return (
        <div className='text-3xl font-bold underline'>
            <h2>{text}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;