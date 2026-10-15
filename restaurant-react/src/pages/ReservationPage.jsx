import {useForm} from 'react-hook-form'
import {Form, FormGroup, Label, Input, Button, FormFeedback, Alert} from "reactstrap";
import {yupResolver} from '@hookform/resolvers/yup'
import {reservationSchema} from "../validation/reservationSchema.js";
import {useState} from "react";

export const ReservationPage = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(reservationSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            partySize: "",
            date: "",
            time: "",
            seating: "",
            dietaryNotes: "",
            newsletter: false
        }
    });


    const [submitted, setSubmitted] = useState(false);

    const getTodayDate = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    const {ref: nameRef, ...nameRegister} = register("name");
    const {ref: emailRef, ...emailRegister} = register("email");
    const {ref: partySizeRef, ...partySizeRegister} =
        register("partySize");
    const {ref: dateRef, ...dateRegister} = register("date");
    const {ref: timeRef, ...timeRegister} = register("time");
    const {ref: indoorRef, ...indoorRegister} = register("seating");
    const {ref: outdoorRef, ...outdoorRegister} = register("seating");
    const {ref: barRef, ...barRegister} = register("seating");
    const {ref: dietaryRef, ...dietaryRegister} =
        register("dietaryNotes");
    const {ref: newsletterRef, ...newsletterRegister} =
        register("newsletter");


    const onSubmit = (data) => {
        console.log("reservation:", data)
        setSubmitted(true)
        reset()
    }


    return (
        <main className="container mt-4 mb-5" style={{ maxWidth: "750px" }}>
            <h1 className="text-center mb-4">
                Make a Reservation
            </h1>

            {submitted && (
                <Alert color="success" role="status">
                    Thank you! Your reservation request has been submitted successfully.
                </Alert>
            )}
            <Form
                className="reservation-form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        type="text"
                        invalid={!!errors.name}
                        {...nameRegister}
                        innerRef={nameRef}
                    />

                    <FormFeedback>
                        {errors.name?.message}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        invalid={!!errors.email}
                        {...emailRegister}
                        innerRef={emailRef}
                    />

                    <FormFeedback>
                        {errors.email?.message}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="partySize">Party Size</Label>

                    <Input
                        id="partySize"
                        type="select"
                        invalid={!!errors.partySize}
                        {...partySizeRegister}
                        innerRef={partySizeRef}
                    >
                        <option value="">Select party size</option>

                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </Input>

                    <FormFeedback>
                        {errors.partySize?.message}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="date">Reservation Date</Label>

                    <Input
                        id="date"
                        type="date"
                        min={getTodayDate()}
                        invalid={!!errors.date}
                        {...dateRegister}
                        innerRef={dateRef}
                    />

                    <FormFeedback>
                        {errors.date?.message}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="time">Reservation Time</Label>

                    <Input
                        id="time"
                        type="time"
                        min="08:00"
                        max="21:00"
                        invalid={!!errors.time}
                        {...timeRegister}
                        innerRef={timeRef}
                    />

                    <FormFeedback>
                        {errors.time?.message}
                    </FormFeedback>
                </FormGroup>

                <div className="d-flex justify-content-start">
                    <FormGroup tag="fieldset">
                        <legend className="fs-6">
                            Seating Preference
                        </legend>

                        <FormGroup check>
                            <Input
                                id="indoor"
                                type="radio"
                                value="indoor"
                                invalid={!!errors.seating}
                                {...indoorRegister}
                                innerRef={indoorRef}
                            />
                            <Label check for="indoor">
                                Indoor Seating
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                id="outdoor"
                                type="radio"
                                value="outdoor"
                                invalid={!!errors.seating}
                                {...outdoorRegister}
                                innerRef={outdoorRef}
                            />
                            <Label check for="outdoor">
                                Outdoor Seating
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Input
                                id="bar"
                                type="radio"
                                value="bar"
                                invalid={!!errors.seating}
                                {...barRegister}
                                innerRef={barRef}
                            />
                            <Label check for="bar">
                                Bar Seating
                            </Label>
                        </FormGroup>

                        {errors.seating && (
                            <div className="text-danger mt-2" role="alert">
                                {errors.seating.message}
                            </div>
                        )}
                    </FormGroup>

                </div>

                <FormGroup>
                    <Label for="dietaryNotes">
                        Dietary Notes (Optional)
                    </Label>

                    <Input
                        id="dietaryNotes"
                        type="textarea"
                        maxLength={30}
                        rows={3}
                        invalid={!!errors.dietaryNotes}
                        {...dietaryRegister}
                        innerRef={dietaryRef}
                    />

                    <FormFeedback>
                        {errors.dietaryNotes?.message}
                    </FormFeedback>
                </FormGroup>

                <div className="d-flex justify-content-start">
                    <FormGroup check className="mb-3">
                        <Input
                            id="newsletter"
                            type="checkbox"
                            {...newsletterRegister}
                            innerRef={newsletterRef}
                        />

                        <Label check for="newsletter">
                            Subscribe to our newsletter
                        </Label>
                    </FormGroup>
                </div>

                <Button color="primary" type={"submit"}>
                    Submit Reservation
                </Button>
            </Form>
        </main>
    )
}

