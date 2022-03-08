import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Token} from '../../../../config/Config'

export const Imagefile = () => {
    const token = Token().token
  const { register, handleSubmit } = useForm({ mode: "onBlur" });
  const [selectedFiles, setSelectedFiles] = useState([])
const [multipleImage, setMultipleImage] = useState([])
    const handleImageChangeDemo = (e) => {
        setSelectedFiles([]);
        setMultipleImage(e.target.files)
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file));
            setSelectedFiles((prevImages)=>prevImages.concat(fileArray));
            Array.from(e.target.files).map((file)=>URL.revokeObjectURL(file));
        }
    }

  
    const renderPhotos = (source) => {
        return source.map((photo)=>{
            return <img className='p-2' src={photo} alt="" key={photo} style={{width:"20%",height:"180px"}}  />;
        });
    }

    const onSubmit = (data) =>{
        let files = multipleImage;

        const formData = new FormData();

         for(let i=0; i < files.length; i++){
             formData.append('file[]', files[i])
         }
         formData.append('name',data.name)
         formData.append('address',data.address)

        
         axios.post(`http://52.91.235.134/api/Dish`,formData, { headers: { Authorization: 'Bearer ' + token } })
                .then((response) => {
                    // reset()
                    // setSelectedDiscountImage("")
                    console.log(response.data, "this is from Promotion Controller")
                })
                .catch((error) => {
                    console.error(error);
                });
    }

  return (
    <><div>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          <input type="text" {...register("name")} />
          <input type="text" {...register("address")} />

          <input
            type="file"
            name="file[]"
            id="file"
            multiple
            onChange={handleImageChangeDemo}
          />
          <div className="result">{renderPhotos(selectedFiles)}</div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};
