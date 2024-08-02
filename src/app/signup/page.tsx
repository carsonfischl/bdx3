

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
    const form = ({
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
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Account Type:
                    <select name="accountType" value={formData.accountType} onChange={handleAccountTypeChange}>
                        <option value={AccountType.Regular}>Regular</option>
                        <option value={AccountType.Business}>Business</option>
                    </select>
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;