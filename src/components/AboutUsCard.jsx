import React from 'react';

function AboutUsCard() {
  return (
    <div>
        <div className="container">
            <div className="container mb-5">
            <h2>Welcome</h2>
            </div>
            <div className="card-group">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Secure Storage</h5>
                <p className="card-text">Protects your funds from theft or loss. Banks typically have robust security measures in place, including physical security for branches, secure online access systems, and fraud detection mechanisms.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Convenient Access</h5>
                <p className="card-text">This allows you to manage your finances conveniently from anywhere, anytime. You can check your account balance, transfer funds, pay bills, and deposit checks without needing to visit a physical branch.</p>

                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Interest on Savings</h5>
                <p className="card-text">Allows your money to grow over time. Even though interest rates may be low, they can still provide some return on your deposited funds compared to keeping them under your mattress.</p>
                </div>
            </div>
            </div>
            <div className="card-group">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title"> Payment Services</h5>
                <p className="card-text">Saves you time and effort compared to sending payments by mail or in person. Banks can automate recurring payments and offer features like online bill pay, simplifying financial management.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Loans and Credit Products</h5>
                <p className="card-text">Helps you finance larger purchases or expenses. Banks can offer competitive interest rates and flexible repayment terms based on your creditworthiness..</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUsCard;