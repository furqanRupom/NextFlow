import Modal from "./Modal";

const  TaskModal = ({isOpen,setIsOpen}) => {

    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Nexus Flow">this is nexus flow app </Modal>

        </div>
    );
};


export default TaskModal;