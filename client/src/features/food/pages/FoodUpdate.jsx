import React, {useEffect, useState} from "react";

import FoodCreate from "./FoodCreate";
import PropTypes from "prop-types";
import foodApi from "api/foodApi";
import {useLocation} from "react-router";

FoodUpdate.propTypes = {};

function useQuery() {
	const {search} = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}

function FoodUpdate(props) {
	const query = useQuery();
	const foodId = query.get("id");

	const [selectedFood, setSelectedFood] = useState({});

	useEffect(() => {
		if (!foodId) return;

		const fetchFood = async () => {
			try {
				const response = await foodApi.getOne({data: foodId});

				if (!response.success) {
					alert(response.message);
					return;
				}

				setSelectedFood(response.response);
			} catch (err) {
				console.log(err);
				alert("Lỗi gì rồi");
			}
		};

		fetchFood();
	}, [foodId]);

	if (!foodId || !selectedFood._id) return null;

	return <FoodCreate initialFood={selectedFood} />;
}

export default FoodUpdate;
