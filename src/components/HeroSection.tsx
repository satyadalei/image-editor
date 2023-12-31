import { LinearGradient } from "react-text-gradients";
import CrossSvg from "./CrossSvg";
import { 
  // useRef, 
  useState 
} from "react";
import GeneralButton from "./GeneralButton";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const HeroSection = () => {
  // const fileInputRef = useRef<HTMLInputElement | null>(null); // Updated type to allow null
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Updated type to allow null
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // const handleButtonClick = () => {
  //   // Clear the input value
  //   if (fileInputRef.current) {
  //     // Clear the input value
  //     fileInputRef.current.value = "";   // Every time you should reset this value because if you do not do it once you have selected a file input tag holds the file & then if you remove that & try to select once again this will not select that file because there is nothing change no onChange event will occur.
  //     // Programmatically click the hidden file input
  //     fileInputRef.current.click();
  //   }
  // };

  const onDrop = useCallback((acceptedFiles : File[]) => {
    // Do something with the files
    const file = acceptedFiles?.[0] || null;
    setSelectedFile(file);
    
    // Display the selected image
    if (file) {
      // const url = URL.createObjectURL(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
    // console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0] || null;
  //   setSelectedFile(file);
    
  //   // Display the selected image
  //   if (file) {
  //     // const url = URL.createObjectURL(file);
  //     const url = URL.createObjectURL(file);
  //     setImageUrl(url);
  //   } else {
  //     setImageUrl(null);
  //   }
  // };

  const handleRemoveImage = ()=>{
    setImageUrl(null);
  }

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex flex-col items-center ">
          <h1 className="text-7xl font-bold text-center m-1">
            <LinearGradient gradient={["to left", "#17acff ,#e800d1"]}>
              Image Dropper
            </LinearGradient>
          </h1>

          <div className="w-full flex flex-col items-center justify-center" >
            <div
              className="relative border-1 min-w-60 w-[90%] max-w-72 h-48 border border-white/15 rounded-lg mt-10 mb-5 flex flex-col justify-center items-center  shadow-white/85 bg-white/15 cursor-pointer"
              // onClick={() => {
              //   handleButtonClick();
              // }}
              {...getRootProps()}
            >
              <input
                style={{ display: "none" }}
                {...getInputProps()}
                type="file"
                // ref={fileInputRef}
                // onChange={handleFileChange}
              />

              <p className="text-sm mb-5">
                {
                  isDragActive ?
                  <span className="opacity-15">Drop the files here ...</span> :
                    <span className="opacity-15">choose file or drag & drop</span>
                }
              </p>
              <CrossSvg />
            </div>

            <div>
              {imageUrl !== "" && imageUrl !== null && (
                <div>
                    <img
                      src={selectedFile !== null ? URL.createObjectURL(selectedFile) : "" }
                      alt="Selected file"
                      style={{ maxWidth: "100%", maxHeight: "200px"}}
                    />
                    {/* <button>Remove Image</button> */}
                    <GeneralButton onClick={()=>{handleRemoveImage()}} buttonText="Remove Image" className="bg-red-500" />


                  <h1 className="text-3xl text-sky-500" >Edit image</h1>
                   <div>
                      <GeneralButton buttonText="Crop" />
                      <GeneralButton buttonText="Change size" />
                      <GeneralButton buttonText="Change quality" />
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
