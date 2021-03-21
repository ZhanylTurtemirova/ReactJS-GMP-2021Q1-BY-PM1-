import React, { FC, ReactElement } from "react";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ModalTitle,
} from "./Modal.styles";

interface ModalProps {
  isHidden: boolean;
  children: any;
  title?: string;
  onClose: () => void;
}

const Modal: FC<React.PropsWithChildren<ModalProps>> = ({
  isHidden,
  children,
  title,
  onClose,
}): ReactElement => {
  return (
    <ModalWrapper isHidden={isHidden}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {title && <ModalTitle>{title}</ModalTitle>}
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
