import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UploadAvatar from "./components/UploadAvatar";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  return (
    <div className=" relative w-screen bg-bg-mobile bg-cover bg-center bg-no-repeat px-8 pb-8">
      <Header />
      <UploadAvatar />
      <Form />
      <Ticket />
    </div>
  );
}

export default App;
