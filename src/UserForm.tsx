import React, { useState } from 'react';
import type { UserForm as UserFormType, FormErrors } from './types/userform';

const UserForm = () => {
    const [formData, setFormData] = useState<UserFormType>({
        name: '',
        age: 0,
        email: '',
        password: '',
        confirmPassword: '',
        phone: "",
        gender: 'male'
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'age' ? (Number(value) || 0) : value,
        });
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation logic would go here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto bg-green-200 shadow-lg rounded-xl p-8 mt-10'>
            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='name' className='text-lg font-bold'>Name:</label>
                <input
                    type='text'
                    value={formData.name}
                    id='name'
                    name='name'
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.join(', ')}</span>}
            </div>

            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='email' className='text-lg font-bold'>Email:</label>
                <input
                    type='email' // Fixed type
                    value={formData.email} // Fixed value binding
                    id='email'
                    name='email' // Fixed name to match schema
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                />
            </div>

            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='age' className='text-lg font-bold'>Age:</label>
                <input
                    type='number' // Correct type for age
                    value={formData.age} // Fixed value binding
                    id='age'
                    name='age' // Fixed name to match schema
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                />
            </div>

            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='password' className='text-lg font-bold'>Password:</label>
                <input
                    type='password'
                    value={formData.password}
                    id='password'
                    name='password'
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                />
            </div>

            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='confirmPassword' className='text-lg font-bold'>Confirm Password:</label>
                <input
                    type='password'
                    value={formData.confirmPassword}
                    id='confirmPassword'
                    name='confirmPassword' // Fixed name (was 'name')
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                />
            </div>

            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='phone' className='text-lg font-bold'>Phone:</label>
                <input
                    type='tel' // Better for phone numbers
                    value={formData.phone}
                    id='phone'
                    name='phone'
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                />
            </div>

            <div className='py-2 px-5 flex flex-col'>
                <label htmlFor='gender' className='text-lg font-bold'>Gender:</label>
                <select
                    name='gender'
                    value={formData.gender}
                    className='border border-gray-500 rounded px-2 py-2 mx-2'
                    onChange={changeInputHandler}
                >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
            </div>

            <button
                type="submit"
                className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg shadow-md"
            >
                Submit
            </button>
        </form>
    );
};

export default UserForm;