import React from 'react'

const LoginUser = () => {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card mt-4 text-center">
            <div class="card-header">
              <h1>Login</h1>
            </div>
              <div class="card-body">
                <form action="/users/signin" method="POST">
                  <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Email" autofocus/>
                    </div>
                    <div class="form-group">
                      <input type="password" name="password" class="form-control" placeholder="Password"/>
                    </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                          Create
                        </button>
                      </div>
                </form>
                  </div>
        </div>
              </div>
      </div>
    </React.Fragment>
  )
}

export default LoginUser