import React from 'react'
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
                        LeaveRequest
                    </CardAnimated>
                    <CardAnimated yourClass="animatedCard" />
                    <CardAnimated yourClass="animatedCard" />
                </div>
            </div>
            <div className="servicesHome-managerServices">
                <h3 className="servicesHome-managerServices_title">
                Manager Services
                </h3>
                <div className="servicesHome-content">
                    <CardAnimated yourClass="animatedCard" />
                    <CardAnimated yourClass="animatedCard" />
                    <CardAnimated yourClass="animatedCard" />
                </div>
            </div>
        </div>
    )
}

export default Services
