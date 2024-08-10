"use client";

import React, { useState } from 'react';
import styles from '../styles/signup.module.css'

enum AccountType {
    Regular = 'Regular',
    Business = 'Business',
}

interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    accountType: AccountType;
}

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        accountType: AccountType.Regular,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleAccountTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            accountType: value as AccountType,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
         <>
            <div className='bg-orange-400 w-screen h-100 flex justify-center align-middle'>
                <form onSubmit={handleSubmit} className='mt-60'>
                <label className='text-orange-700 text-4xl my-4'>
                        First Name
                        <br />
                        <input
                            type="text"
                            name="firstName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900'
                        />
                    </label>
                    <br />
                    <label className='text-orange-700 text-4xl my-4'>
                        Last Name
                        <br />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900'
                        />
                    </label>
                    <br />
                    <label className='text-orange-700 text-4xl my-4'>
                        Email
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900'
                        />
                    </label>
                    <br />
                    <label className='text-orange-700 text-4xl my-4'>
                        Password
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            title="Password must be at least 8 characters long, have at least one uppercase character, one lowercase character, one number, and one special character"
                            className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900'
                        />
                    </label>
                    <br />
                    <label className='text-orange-700 text-4xl my-4'>
                        Confirm Password
                        <br />
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleInputChange}
                            className='bg-orange-600 text-4xl my-4 rounded-lg text-orange-900 sm:text-xl'
                        />
                    </label>
                    <br />
                    <div className='text-orange-700 text-xl'>
                        <div className={styles.requirement}>
                            {formData.password.length >= 8 ? (
                                <span className={styles.checkmark}>✅ </span>
                            ) : (
                                <span className={styles.cross}>❌ </span>
                            )}
                            <span>At least 8 characters</span>
                        </div>
                        <div className={styles.requirement}>
                            {/[a-z]/.test(formData.password) ? (
                                <span className={styles.checkmark}>✅ </span>
                            ) : (
                                <span className={styles.cross}>❌ </span>
                            )}
                            <span>At least one lowercase letter</span>
                        </div>
                        <div className={styles.requirement}>
                            {/[A-Z]/.test(formData.password) ? (
                                <span className={styles.checkmark}>✅ </span>
                            ) : (
                                <span className={styles.cross}>❌ </span>
                            )}
                            <span>At least one uppercase letter</span>
                        </div>
                        <div className={styles.requirement}>
                            {/\d/.test(formData.password) ? (
                                <span className={styles.checkmark}>✅ </span>
                            ) : (
                                <span className={styles.cross}>❌ </span>
                            )}
                            <span>At least one number</span>
                        </div>
                        <div className={styles.requirement}>
                            {/[@$!%*?&]/.test(formData.password) ? (
                                <span className={styles.checkmark}>✅ </span>
                            ) : (
                                <span className={styles.cross}>❌ </span>
                            )}
                            <span>At least one special character</span>
                        </div>
                    </div>
                    <br />
                    
                    <label className='text-orange-700 text-4xl my-4'>
                        Account Type
                        <br />  
                        <div className='align-middle justify-center w-100 flex'>
                            <select name="accountType" value={formData.accountType} onChange={handleAccountTypeChange} className='bg-orange-600 text-2xl my-4 rounded-lg text-orange-900 p-2'>                            <option value={AccountType.Regular}>Regular</option>
                                <option value={AccountType.Business}>Business</option>
                            </select>
                        </div>
                    </label>
                    <br />
                    <div className='text-orange-700 text-4xl my-4 align-middle flex justify-center mt-4'>
                        <button type="submit" className='bg-orange-800 hover:bg-orange-900 text-orange-400 rounded-xl text-4xl p-4 mb-4 align-middle justify-center'>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUpPage;