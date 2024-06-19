import React from "react";
import ReactDOM from "react-Dom/client";
import './style.css'; // Assuming you have a CSS file named styles.css
import { useForm } from "react-hook-form";

const App = ()=>{
    const {register , handleSubmit, setError , formState: {errors ,isSubmitting}} = useForm({
        defaultValues:{
            email :"test@email.com",
            password : "********",
        }
    });
    const onSubmit = async(data)=>{
        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));
            throw new Error("check email");
            console.log(data);
        }
        catch (error){
            console.log(error);
            setError("root",{
                message :"This Email is already Taken",
            })
        }
    };
    return (
        <>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email',{
                required: "Email is  required",
                validate :(value)=>{
                    if(!value.includes("@")){
                        return "Email must include @";
                    }
                    return true;
                }
                
            })} type="text" placeholder="Email" />
            {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
            <input {...register("password",{
                required: "Password is required",
                minLength: {
                    value :8,
                    message : "Password must have atleast 8 characters",
                },
            })} type="password" placeholder="Password" />
            {errors.password && <div style={{ color: "red" }}>{errors.password.message}</div>}
            <button disabled= {isSubmitting} type="submit">
                {isSubmitting? "Loading...":"Submit"}
            </button>
                {errors.root && <div style={{ color: "red" }}>{errors.root.message}</div>}
        </form>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // we can also write like this for functional component root.render(Header())


