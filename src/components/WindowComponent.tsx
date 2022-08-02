import * as React from "react";
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {useRef, useState} from "react";
import {Controller, useForm} from 'react-hook-form';
import {Dropdown} from "primereact/dropdown";
import {RadioButton} from 'primereact/radiobutton';
import {InputText} from "primereact/inputtext";
import {Toast} from "primereact/toast";

const WindowComponent = () => {
    const [visible, setVisible] = useState(false);
    const toastBR = useRef(null);

    const defaultValues = {
        type: 'Executive Summary',
        company: 'Company Name',
        name: 'Placeholder',
        export: "Export Now",
        recurrence: 'Weekly',
        on: 'Monday',
        reportingInterval: 'Last 7 days',
        attachFiles: false,
    }
    const {
        control,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm({defaultValues});
    const watchExport = watch("export");
    const typeValues = [
        {name: "Executive Summary 1"},
        {name: "Executive Summary 2"},
    ];
    const typeCompany = [
        {name: "Company Name 1"},
        {name: "Company Name 2"},
    ];
    const intervals = [
        {name: "Last 14 days"},
        {name: "Last 21 days"},
    ];

    const onHide = () => {
        setVisible(false);
    }
    const onSave = (data) => {
        toastBR.current.show({severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000});
        console.log(data);
    }
    const openModal = () => {
        setVisible(true);
    }

    return (
        <div className="dialog-demo">
            <div className="card">
                <Button label="Create Report" style={{borderRadius: 50}} onClick={openModal}/>
                <Dialog header="Create Report" visible={visible} style={{width: '60vw'}} onHide={onHide}>
                    <h3>Details</h3>
                    <form onSubmit={handleSubmit(onSave)} className="p-fluid">
                        <div className={"form-fields"}>
                            <div className={"text-form-normal"}>Type</div>
                            <Controller name="type"
                                        control={control}
                                        rules={{required: true}}
                                        render={({field, fieldState}) => {
                                            return (
                                                <Dropdown
                                                    {...field}
                                                    options={typeValues}
                                                    optionLabel="name" editable/>)
                                        }}
                            />
                        </div>
                        <div className={"form-fields"}>
                            <div className={"text-form-normal"}>Company</div>
                            <Controller name="company"
                                        control={control}
                                        rules={{required: true}}
                                        render={({field, fieldState}) => {
                                            return (
                                                <Dropdown
                                                    {...field}
                                                    options={typeCompany}
                                                    optionLabel="name" editable/>)
                                        }}
                            />

                        </div>
                        <div className={"form-fields"}>
                            <div className={"text-form-normal"}>Name*</div>
                            <Controller name="name"
                                        control={control}
                                        rules={{required: true}}
                                        render={({field, fieldState}) => {
                                            return (
                                                <InputText
                                                    {...field}
                                                    style={{width: 255}}
                                                />)
                                        }}
                            />

                        </div>
                        <h3>Settings</h3>
                        <div>
                            <div className="field-radiobutton">
                                <Controller name="export"
                                            control={control}
                                            render={({field, fieldState}) => {
                                                return (
                                                    <div>
                                                        <div className="field-radiobutton">
                                                            <RadioButton
                                                                inputId="export"
                                                                value="Export Now"
                                                                onChange={e => field.onChange(e.value)}
                                                                checked={field.value === 'Export Now'}
                                                            />
                                                            <label style={{marginLeft: 10}} htmlFor="export">Export
                                                                now</label>
                                                        </div>
                                                        <div className="field-radiobutton">
                                                            <RadioButton
                                                                inputId="scheduled"
                                                                value="Scheduled"
                                                                onChange={e => field.onChange(e.value)}
                                                                checked={field.value === 'Scheduled'}
                                                            />
                                                            <label style={{marginLeft: 10}}
                                                                   htmlFor="city1">Scheduled</label>
                                                        </div>
                                                    </div>
                                                )
                                            }}
                                />
                            </div>

                            {watchExport === "Scheduled" &&
                            <div>
                                <div className={"form-fields"}>
                                    <div className={"text-form"}>Recurrence</div>
                                    <Controller name="recurrence"
                                                control={control}
                                                rules={{required: true}}
                                                render={({field, fieldState}) => {
                                                    return (
                                                        <Dropdown
                                                            {...field}
                                                            options={typeValues}
                                                            optionLabel="name" editable/>)
                                                }}
                                    />

                                </div>
                                <div className={"form-fields"}>
                                    <div className={"text-form"}>On</div>
                                    <Controller name="on"
                                                control={control}
                                                rules={{required: true}}
                                                render={({field, fieldState}) => {
                                                    return (
                                                        <Dropdown
                                                            {...field}
                                                            options={typeValues}
                                                            optionLabel="name" editable/>)
                                                }}
                                    />
                                </div>
                            </div>
                            }
                            <div className={"form-fields"}>
                                <div className={"text-form-normal"}>Reporting interval</div>
                                <Controller name="reportingInterval"
                                            control={control}
                                            render={({field, fieldState}) => {
                                                return (
                                                    <Dropdown
                                                        {...field}
                                                        options={intervals}
                                                        optionLabel="name" editable/>)
                                            }}
                                />

                            </div>

                            <Toast ref={toastBR} position="bottom-right"/>
                        </div>
                        <div className="footer-modal">
                        <Button  style= {{width:100}}label="SAVE" type="submit" className="p-button-text"/>
                        <Button style= {{width:100}} label="CANCEL" onClick={() => onHide()} autoFocus/>
                        </div>
                    </form>

                </Dialog>
            </div>
        </div>
    )
}

export default WindowComponent;
