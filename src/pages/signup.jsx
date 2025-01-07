import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import AuthLayout from '../components/Layout/AuthLayout'

const SignUp = () => {
  return (
    <MaxWidthWrapper className="flex items-center justify-center min-h-screen">
        <AuthLayout title="SignUp"/>
    </MaxWidthWrapper>
  )
}

export default SignUp