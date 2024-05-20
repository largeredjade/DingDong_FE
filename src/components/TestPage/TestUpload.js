import styled from "styled-components";
import {useEffect, useMemo, useRef, useState} from "react";

function TestUpload() {
    const fileInput = useRef(null);
    const [imgFile, setImgFile] = useState(null);

    const handleUploadBtn =(e)=>{
        fileInput.current.click();
    };


    const handleUploadFile  = (e) =>{
        const fileList = e.target.files;
        if (fileList && fileList[0]){
            const url = URL.createObjectURL(fileList[0]);
            console.log('url',url);

            setImgFile({
                file: fileList[0],
                thumbnail:url,
                type :fileList[0].type,
            });
        }
        console.log('e.target.files[0]',e.target.files[0]);
        console.log('imgFile',imgFile);



    };

    const showImage = useMemo(()=>{
        if (!imgFile && imgFile == null){
            return <img src={'public/logo192.png'} alt={'비어있는 프로필'}/>;}
        return <img src={imgFile.thumbnail} alt={imgFile.type} onClick={handleUploadBtn}/>
    },[imgFile]);

    useEffect(() => {
        console.log('다시 한 번 실행됩니댜')

    }, [imgFile]);

    return (
        <>
            <h1>파일 업로드 테스트</h1>
            <FileUploadBtn onClick={handleUploadBtn}>파일 업로드</FileUploadBtn>
            <input
                type={'file'}
                ref={fileInput}
                accept={'image/jpeg, image/jpg, image/png'}
                onChange={handleUploadFile}
                style={{display:"none"}}
            />
            <UploadedFile>
                {showImage}
            </UploadedFile>
        </>

    );
}

export default TestUpload;

const FileUploadBtn = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1px solid ${({theme}) => theme.backgroundColor.mainColor};;
`

const UploadedFile = styled.div`
    img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 1px solid ${({theme}) => theme.backgroundColor.mainColor};;
        
    }

`
