import * as yup from "yup";

export const reservationSchema = yup.object({
    name: yup
        .string()
        .required("Name is required")
        .max(20, "Name cannot exceed 20 characters"),

    email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),

    partySize: yup
        .number()
        .transform((value, originalValue) =>
            originalValue === "" ? undefined : value
        )
        .typeError("Please select a party size")
        .required("Party size is required")
        .min(1, "Party size must be at least 1")
        .max(8, "Party size cannot exceed 8"),

    date: yup
        .string()
        .required("Reservation date is required"),

    time: yup
        .string()
        .required("Reservation time is required")
        .test(
            "business-hours",
            "Reservations must be between 8:00 AM and 9:00 PM",
            (value) => {
                if (!value) return true;

                return value >= "08:00" && value <= "21:00";
            }
        ),

    seating: yup
        .string()
        .oneOf(
            ["indoor", "outdoor", "bar"],
            "Please select a valid seating preference"
        )
        .required("Seating preference is required"),

    dietaryNotes: yup
        .string()
        .max(30, "Dietary notes cannot exceed 30 characters"),

    newsletter: yup
        .boolean()
        .default(false)
});
