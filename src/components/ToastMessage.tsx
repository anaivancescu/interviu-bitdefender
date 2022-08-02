import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const ToastMessage = () => {
    const toast = useRef(null);
    const toastBR = useRef(null);

    const showBottomRight = () => {
        toastBR.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }
    return (
        <div>
            <Toast ref={toast} />
            <Toast ref={toastBR} position="bottom-right" />
            <div className="card toast-demo">
                <Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />
            </div>
        </div>
    )
}
export default ToastMessage;
