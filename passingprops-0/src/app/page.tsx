import Image from "next/image";
import Proptesting from "./components/proptesting";

export default function Home( ){
  return ( 
    <div>
    <h1>Welcome to Next.js by samad </h1>

    <h2>www.linkedin.com/in/samaddeveloper</h2>

    <Proptesting name="samad" age="25" rollno="12345" cell ="9876543210" slot="morning" time="9am" />



  </div> 
  );
}
