import { Modal } from "react-bootstrap";
interface ResumeProps {
  isShow: boolean;
  handleIsClose: (isClose: boolean) => void;
  isResume?: boolean;
}

const Resume = ({ isShow, handleIsClose, isResume }: ResumeProps) => {
  return (
    <Modal show={isShow} onHide={() => handleIsClose(!isShow)} size="lg">
      {isResume && (
        <div
          style={{
            height: "100%",
            overflow: "auto",
          }}
        >
          <iframe
            style={{
              width: "100%",
              minHeight: "95vh",
              border: "none",
            }}
            src={require("../../resume/AlexTran_Resume.pdf")}
          ></iframe>
        </div>
      )}
    </Modal>
  );
};

export default Resume;
