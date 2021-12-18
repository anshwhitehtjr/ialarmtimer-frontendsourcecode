import React, { useState } from 'react';
import AlarmItem from './AlarmItem';
import OptionsGenerator from './OptionsGenerator';

const Alarm = () => {
    const [edit, setEdit] = useState(false);
    const [addAlarm, setAlarm] = useState(false);
    const possibleHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const possibleMins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

    const handleEditMode = e => {
        e.preventDefault();
        if (edit === false) { setEdit(true); }
        if (edit === true) { setEdit(false); }
    };

    const chechVal = e => {
        let a = e.target.value;
        console.log(a);
    };

    return (
        <div className="bd-example">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <AlarmItem
                    isEdit={ edit }
                    time='7:00am'
                    desc="This is a desc bro, but please wake me up on 7am as i have exam" />
            </div>
            <div className="modal fade" id="addAlarm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addAlarmLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addAlarmLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 needs-validation">
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom04" className="form-label">Hours</label>
                                    <select className="form-select" id="hour" required>
                                        {
                                            possibleHours.map(e => {
                                                return <option key={ e }>{ e }</option>;
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom04" className="form-label">Minutes</label>
                                    <select className="form-select" id="minute" required>
                                        {
                                            possibleMins.map(e => {
                                                return <option key={ e }>{ e }</option>;
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom04" className="form-label">Seconds</label>
                                    <select className="form-select" id="second" required>
                                        {
                                            possibleMins.map(e => {
                                                return <option key={ e }>{ e }</option>;
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationCustom04" className="form-label">Frequency</label>
                                    <select className="form-select" id="second" required>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                        <option>Everday</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input className="form-control" placeholder="Enter the Description of the alarm here" id="floatingTextarea"></input>
                                        <label htmlFor="floatingTextarea">Description</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type='submit' className="btn container-fluid btn-info">
                                        Add This Alarm
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <button type="button" className="btn container-fluid btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <button style={ { float: 'right' } } className="btn btn-info" data-bs-toggle="modal" data-bs-target="#addAlarm">
                + Add A Alarm
            </button>
            <button style={ { float: 'right' } } onClick={ handleEditMode } className="btn btn-secondary" >
                <i className="fal fa-edit"></i>
            </button>
        </div>
    );
};

export default Alarm;
