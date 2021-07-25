import React from 'react'
import Link from 'next/link'
import { CardAnimated } from "sharlq-comp-lib";

const Services = () => {

    return (
        <div className="servicesHome">

            <h2 className="servicesHome-title">Welcome to the services</h2>
            
            <div className="servicesHome-employeeServices">

                <h3 className="servicesHome-employeeServices_title">
                Employee Services
                </h3>

                <div className="servicesHome-content">
                    <CardAnimated yourClass="animatedCard" >
                        <Link href='/services/LeaveRequest'>
                        <h4>Leave Request</h4>
                        </Link>
                    </CardAnimated>
                    <CardAnimated yourClass="animatedCard" >
                        <h4>Work Schduals</h4>
                    </CardAnimated>
                    <CardAnimated yourClass="animatedCard" />
                </div>

            </div>

            <div className="servicesHome-managerServices">
                <h3 className="servicesHome-managerServices_title">
                Manager Services
                </h3>
                <div className="servicesHome-content">
                <CardAnimated yourClass="animatedCard" >
                <Link href='/services/ShowLeaveRequests'>
                        <h4>Show Leave Request</h4>
                        </Link>
                    </CardAnimated>
                    <CardAnimated yourClass="animatedCard" />
                    <CardAnimated yourClass="animatedCard" />
                </div>
            </div>
            
        </div>
    )
}

export default Services
