import 'components/form/cusform.scss';

import * as yup from 'yup';

import { FastField, Formik } from 'formik';

import InputField from 'components/form/InputField';
import PropTypes from "prop-types";
import React from 'react';
import foodApi from 'api/foodApi';
import { foodCreate } from '../foodSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

FoodCreate.prototype = {
    initialFood: PropTypes.object,
}
FoodCreate.defaultProps = {
    initialFood: undefined,
}

const schema = yup.object().shape({
    name: yup.string().required("this field is required"),
    image: yup.string().required("this field is required"),
    description: yup.string().required("this field is required"),
    production: yup.string().required("this field is required"),
    cost: yup.number().required("this field is required"),
    unit: yup.string().required("this field is required"),
    minMass: yup.string().required("this field is required"),
    maxMass: yup.string().required("this field is required"),
});
function FoodCreate({ initialFood }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = {
        name: initialFood ? initialFood.name : "",
        image: initialFood ? initialFood.image : "",
        description: initialFood ? initialFood.description : "",
        production: initialFood ? initialFood.production : "",
        cost: initialFood ? initialFood.cost : "",
        unit: initialFood ? initialFood.unit : "",
        minMass: initialFood ? initialFood.minMass : "",
        maxMass: initialFood ? initialFood.maxMass : "",
    }

    const handleSubmit = async (values) => {
        try {
            if (initialFood) {
                const response = await foodApi.update({ updatedData: values, foodId: initialFood._id });
                alert(response.message);
                return;
            }
            const response = await foodApi.create({ data: values });
            alert(response.message);
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
                        <FastField
                            name="image"
                            label="Hình"
                            placeholder="Link ảnh"

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

                        <div className="cusform__button">
                            {initialFood && (
                                <div className="cusform__button__btn" onClick={() => { history.goBack() }}>back</div>
                            )}
                            <button className="cusform__button__btn" type="submmit">submit</button>
                        </div>

                    </form>)
                }}
            </Formik>
        </div>
    );
}

export default FoodCreate;