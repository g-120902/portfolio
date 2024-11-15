function FormLabel({ required, label}: { required: boolean, label: string }) {
    return (
        <span className="flex gap-2">
            <p className="block text-sm font-semibold leading-6">{label}</p>
            <p className={required ? 'text-red-600' : 'hidden'}>*</p>
        </span>
    );
}

export default FormLabel;