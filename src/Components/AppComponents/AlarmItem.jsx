import React from 'react';

const AlarmItem = props => {
    return (
        <>
            {
                props.isEdit
                    ? <div className="col">
                        <div className="card bg-secondary" style={ { width: '18rem', } }>
                            <div className="card-body">
                                <button
                                    style={
                                        {
                                            float: 'right',
                                            fontSize: '1.5rem'
                                        }
                                    }
                                    className="btn btn-secondary text-danger">
                                    <i class="fad fa-trash-alt" />
                                </button>
                                <h3 className="card-title">{ props.time }</h3>
                                <p className="card-text">{ props.desc }</p>
                            </div>
                        </div>
                    </div>
                    : <div className="col">
                        <div className="card hovercard" style={
                            {
                                width: '18rem',
                                backgroundColor: '#e3e5e7',
                            }
                        }>
                            <div className="card-body">
                                <h3 className="card-title">{ props.time }</h3>
                                <p className="card-text">{ props.desc }</p>
                            </div>
                        </div>
                    </div>
            }

        </>
    );
};

export default AlarmItem;
