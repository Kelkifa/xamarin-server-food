import 'components/form/cusform.scss';

import * as yup from 'yup';

import { FastField, Formik } from 'formik';

import InputField from 'components/form/InputField';
import React from 'react';
import { foodCreate } from '../foodSlice';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
    name: yup.string().required("this field is required"),
    description: yup.string().required("this field is required"),
    production: yup.string().required("this field is required"),
    cost: yup.number().required("this field is required"),
    unit: yup.string().required("this field is required"),
    minMass: yup.string().required("this field is required"),
    maxMass: yup.string().required("this field is required"),
});
function FoodCreate(props) {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        description: "",
        production: "",
        cost: "",
        unit: "",
        minMass: "",
        maxMass: "",
    }

    const handleSubmit = async (values) => {
        try {
            await dispatch(foodCreate({ data: values }));
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="food-create">
            <Formik onSubmit={handleSubmit} validationSchema={schema} initialValues={initialValues}>
                {(formikProps) => {
                    const { handleSubmit } = formikProps;

                    return (<form onSubmit={handleSubmit} className="cusform">
                        <h2 className="cusform__title">Tạo food</h2>
                        <div className="cusform__row-c2">
                            <FastField
                                name="name"
                                label="Tên food"
                                placeholder="Nhập tên ..."

                                component={InputField}
                            />

                            <FastField
                                name="cost"
                                label="Giá"
                                placeholder="vd: 100"

                                component={InputField}
                            />
                        </div>

                        <FastField
                            name="description"
                            label="Mô tả"
                            placeholder="mô tả sản phẩm"
                            type="textarea"

                            component={InputField}
                        />

                        <div className="cusform__row-c2">
                            <FastField
                                name="production"
                                label="Nơi sản xuất"
                                placeholder="Nhập tên ..."

                                component={InputField}
                            />
                            <FastField
                                name="unit"
                                label="Đơn vị"
                                placeholder="vd: 1g/hộp"

                                component={InputField}
                            />
                        </div>
                        <div className="cusform__row-c2">
                            <FastField
                                name="minMass"
                                label="Khối lượng tối thiểu"
                                placeholder="vd: 200g"

                                component={InputField}
                            />
                            <FastField
                                name="maxMass"
                                label="Khối lượng tối đa"
                                placeholder="vd : 300g"

                                component={InputField}
                            />
                        </div>

                        <div className="cusform__notifice">
                            them thanh cong
                        </div>
                        <button type="submmit">submit</button>

                    </form>)
                }}
            </Formik>
        </div>
    );
}

export default FoodCreate;