import closeBtn from "../images/icon-close.svg";
function Mobile({ isOpen, setIsOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div onClick={() => setIsOpen(false)} className="modal-backdrop">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="modal-container-content">
          <img
            onClick={() => setIsOpen(false)}
            src={closeBtn}
            alt="close-btn"
          />
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
function Desktop(){
  
}
export default Mobile;
