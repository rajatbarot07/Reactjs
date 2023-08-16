import React from 'react';

function Register(props) {
    return (
        <>
            <form>
                <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="name" class="form-control" id="name" placeholder="Enter name" name="name"/>
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Register;