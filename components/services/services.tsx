import React from "react";
import Link from "next/link";
import { CardAnimated } from "sharlq-comp-lib";
import { useSelector } from "react-redux";
import { selectRank } from "../../redux/features/userSlice";

const Services = () => {
  const rank = useSelector(selectRank);
  const isManager = rank === "topManagement";
  return (
    <div className="servicesHome">
      <h2 className="servicesHome-title">Welcome to the services</h2>

      <div className="servicesHome-employeeServices">
        <h3 className="servicesHome-employeeServices_title">
          Employee Services
        </h3>

        <div className="servicesHome-content">
          <CardAnimated yourClass="animatedCard">
            <Link href="/services/LeaveRequest">
              <h4>Leave Request</h4>
            </Link>
          </CardAnimated>
          <CardAnimated yourClass="animatedCard">
            <h4>Work Schduals</h4>
          </CardAnimated>
          <CardAnimated yourClass="animatedCard" />
        </div>
      </div>

      {isManager && (
        <div className="servicesHome-managerServices">
          <h3 className="servicesHome-managerServices_title">
            Manager Services
          </h3>
          <div className="servicesHome-content">
            <CardAnimated yourClass="animatedCard">
              <Link href="/services/showLeaveRequests">
                <h4>Show Leave Request</h4>
              </Link>
            </CardAnimated>
            <CardAnimated yourClass="animatedCard" />
            <CardAnimated yourClass="animatedCard" />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Services;
