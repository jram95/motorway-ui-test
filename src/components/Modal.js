export default function Modal({show, onClose}){

    if (!show){
        return null
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
                            
                            <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="password" class="form-control" id="fullName" placeholder="Please enter your full name" />
                            </div>

                            <div class="form-group">
                                <label for="Email">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your email" />
                            </div>

                            <div class="form-group">
                                <label for="DOB">Date of Birth</label>
                                <input type="datetime" class="form-control" id="dob" aria-describedby="dob" placeholder="Please enter your DOB" />
                                <small id="dob" class="form-text text-muted">Format DD/MM/YYYY.</small>
                            </div>
  
                            <div class="form-group">
                                <label for="colour">Favourite Colour</label>
                                <input type="text" class="form-control" id="colour" aria-describedby="colour" placeholder="e.g green" />
                            </div>

                            <div class="form-group">
                                <label for="salary">Salary expectations (range)</label>
                                <input type="text" class="form-control" id="salary" aria-describedby="salary" placeholder="e.g. 25000-30000" />
                            </div>
                            
                        </form>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" class="btn btn-success" onClick={onClose}>Submit</button>
                        </div>
                 </div>
            </div>
        </>
    )
}