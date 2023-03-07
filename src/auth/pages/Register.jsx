import  {Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const Register = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form>
            <Grid container>

              <Grid item xs={ 12 } sx={{ mt: 2, pr: 1}} md={ 6 }>
                  <TextField 
                    label='Nombre completo' 
                    type='text' 
                    placeholder="Nombre"
                    fullWidth
                  />
                </Grid>

              
              <Grid item xs={ 12 } sx={{ mt: 2, pr: 1}} md={ 6 }>
                <TextField 
                  label='Correo' 
                  type='email' 
                  placeholder="correo@google.com"
                  fullWidth
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2 }} md={ 6 }>
                <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder="Contraseña"
                  fullWidth
                />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={ 12 }>
                  <Button variant='contained' fullWidth>
                    Crear cuenta
                  </Button> 
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                  Inicia sesión
                </Link>
                
              </Grid>

            </Grid>

          </form>
    </AuthLayout>
  )
}
