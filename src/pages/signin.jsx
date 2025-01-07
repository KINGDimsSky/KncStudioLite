import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import AuthLayout from '../components/Layout/AuthLayout'

const SignIn = () => {
  return (
   <MaxWidthWrapper className="flex items-center justify-center min-h-screen">
     <AuthLayout title="SignIn"/>
   </MaxWidthWrapper>
  )
}

export default SignIn