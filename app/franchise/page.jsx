import FAQSection from '@/components/sections/FAQSection'
import FranchiseForm from '@/components/sections/FranchiseForm'
import FranchiseIntro from '@/components/sections/FranchiseIntro'
import React from 'react'
import FranchiseModel from '@/components/sections/FranchiseModel'

const page = () => {
  return (
    <div>
      <FranchiseIntro />

      <FranchiseForm />

      <FAQSection />
    </div>
  )
}

export default page