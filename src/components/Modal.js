export default function Modal({show, onClose}){

    if (!show){
        return null
    }

    function handleChange(event){
        if (event.target.value.length > 10){
            alert('Full name has to be 10 characters or lower')
        }
    }

    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>Please complete the form</h4>
                    </div>
                    <div className='modal-body'>
                        <form>

                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Please enter your full name" onChange={(event) => handleChange(event)}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="DOB">Date of Birth</label>
                                <input type="datetime" className="form-control" id="dob" aria-describedby="dob" placeholder="Please enter your DOB" />
                                <small id="dob" className="form-text text-muted">Format DD/MM/YYYY.</small>
                            </div>
  
                            <div className="form-group">
                                <label htmlFor="colour">Favourite Colour</label>
                                <input type="text" className="form-control" id="colour" aria-describedby="colour" placeholder="e.g green" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="customRange3" className="form-label">Salary</label>
                                <div className="slidecontainer">
                                    <label htmlFor="min" className="pull-left">20000</label>
                                    <input type="range" min="20000" max="80000"  className="slider" id="myRange" />
                                    <label htmlFor="max" className="pull-right">80000</label>
                                </div>
                            </div>
                            
                        </form>
                        </div>
                            <div className='modal-footer'>
                                <div>
                                <button type="button" class="btn btn-dark" onClick={onClose}>Close</button>
                            </div>
                            <div className='modal-footer'>
                                <button type="button" class="btn btn-success" onClick={onClose}>Submit</button>
                            </div>
                        </div>
                 </div>
            </div>
        </>
    )
}