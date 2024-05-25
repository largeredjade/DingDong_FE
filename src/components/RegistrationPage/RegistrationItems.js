import styled from "styled-components";
import { CameraIcon } from "../Icons/logos";
import RecruitmentItems from "../../components/RegistrationPage/RecruitmentItems";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationItems() {
  const fileInput = useRef(null);
  const [imgFile, setImgFile] = useState(null);

  const handleUploadBtn = (e) => {
    fileInput.current.click();
  };

  const handleUploadFile = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      console.log("url", url);

      setImgFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type,
      });
    }
    console.log("e.target.files[0]", e.target.files[0]);
    console.log("imgFile", imgFile);
  };

  const showImage = useMemo(() => {
    if (!imgFile && imgFile == null) {
      return <CameraIcon />;
    }
    return (

      <img
        src={imgFile.thumbnail}
        alt={imgFile.type}
        onClick={handleUploadBtn}
      />
    );
  }, [imgFile]);

  useEffect(() => {
    console.log("다시 한 번 실행됩니댜");
  }, [imgFile]);

  const [values, setFormData] = useState({
    club_name: "",
    club_code: "",
    club_time: "",
    club_introduction: "",
    club_details: "",
    club_contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(`Input ${name} value:`, value); // 콘솔 로그 추가
  };
  

  let navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (
      values.club_name == "" ||
      values.club_code == "" ||
      values.club_time == "" ||
      values.club_introduction == "" ||
      values.club_details == "" ||
      values.club_contact == ""
    ) {
      alert("모든 필드를 채워주세요!");
    } 
    else {
      if (window.confirm("동아리를 등록하시겠습니까?")) {
        navigate("/mypage");
      }
    }
  }

  return (
    <>
      <Wrapper>
        <Box>
          <CameraBox>
            <p>동아리 사진</p>
            <FileUploadBtn onClick={handleUploadBtn}>{showImage}</FileUploadBtn>
            <input
              type={"file"}
              ref={fileInput}
              accept={"image/jpeg, image/jpg, image/png"}
              onChange={handleUploadFile}
              style={{ display: "none" }}
            />
          </CameraBox>
          <ItemBox>
            <p>동아리 이름</p>
            <WriteInput
              id={"club_name"}
              name={"club_code"}
              value={values.club_code}
              onChange={handleChange}
              placeholder={"우리 동아리 이름을 입력해 주세요"}
            />
          </ItemBox>
          <ItemBox>
            <p>동아리 가입 코드</p>
            <WriteInput
              id={"club_name"}
              name={"club_name"}
              value={values.club_name}
              onChange={handleChange}
              placeholder={"숫자를 입력해 주세요."}
            />
          </ItemBox>
          <ItemBox>
            <p>활동 시간</p>
            <WriteInput
              id={"club_time"}
              name={"club_time"}
              value={values.club_time}
              onChange={handleChange}
              placeholder={"ex) 매주 목요일 오후 7시"}
            />
          </ItemBox>
          <ItemBox>
            <p>동아리 소개</p>
            <WriteClubActivity
              id={"club_introduction"}
              name={"club_introduction"}
              value={values.club_introduction}
              onChange={handleChange}
              placeholder={"우리 동아리에 대해 소개해 주세요"}
            />
          </ItemBox>
          <ItemBox>
            <p>활동 내용</p>
            <WriteClubActivity
              id={"club_details"}
              name={"club_details"}
              value={values.club_details}
              onChange={handleChange}
              placeholder={
                "우리 동아리의 작년 활동 혹은 올해 활동에 대해 작성해 주세요."
              }
              rows="4"
            />
          </ItemBox>
          <ItemBox>
            <p>연락처</p>
            <WriteInput
              id={"club_contact"}
              name={"club_contact"}
              value={values.club_contact}
              onChange={handleChange}
              placeholder={"ex) 010-1234-5678"}
            />
          </ItemBox>
          <RecruitmentItems />
        </Box>
        <RegstrationBtnBox>
          <RegstrationBtn onClick={handelSubmit} type={"submit"}>
            등록하기
          </RegstrationBtn>
        </RegstrationBtnBox>
      </Wrapper>
    </>
  );
}

export default RegistrationItems;

const Wrapper = styled.div`
  height: 100vh;
`;

const Box = styled.div`
  display: grid;
  grid-row: 8;
  border-radius: 30px;
  width: 350px;
  top: 216px;
  justify-content: center;
  background: #ffffff;
  border: 2px solid #cfe9dc;
`;

const CameraWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

const CameraBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: 10px;
  p {
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
    text-align: center;
  }
`;

const ItemBox = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  p {
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
  }
`;

const FileUploadBtn = styled.div`
  margin: 10px;
  font-size: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid #b7b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
  }
`;

const WriteClubActivity = styled.textarea`
  font-size: 15px;
  margin: 10px 10px 20px 10px;
  padding-left: 16px;
  width: 294px;
  height: 80px;
  resize: none;
  border-radius: 20px;
  border: 2px solid #b7b7b7;
  color: ${({ theme }) => theme.colors.darkGray};
  outline: none;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.mainColorDark};
  }
`;

const WriteInput = styled.input`
  font-size: 15px;
  margin: 10px 10px 20px 10px;
  padding-left: 16px;
  width: 294px;
  height: 51px;
  border-radius: 20px;
  border: 2px solid #b7b7b7;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.mainColorDark};
  }
`;
const RegstrationBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RegstrationBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  width: 220px;
  height: 51px;
  border-radius: 20px;
  margin: 10px;
  background: ${({ theme }) => theme.colors.mainColor};
`;
