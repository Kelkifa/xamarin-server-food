import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Table from "components/table/Table";
import foodApi from "api/foodApi";

FoodList.propTypes = {};

function FoodList(props) {
	const [isLoading, setIsLoading] = useState(true);
	const [foodList, setFoodList] = useState([]);

	const headerList = [
		"Stt",
		"Tên",
		"Hình",
		"Mô tả",
		"Nơi sản xuất",
		"Giá",
		"Đơn vị",
		"KL tối thiểu",
		"KL Tối đa",
		"Options",
	];

	useEffect(() => {
		const fetchFoodList = async () => {
			try {
				const response = await foodApi.get();
				if (response.success) {
					setFoodList(response.response);
				}

				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		fetchFoodList();
	}, []);

	const handleDelete = async foodId => {
		if (!foodId) return;
		try {
			const response = await foodApi.delete({data: foodId});
			if (!response) alert("Lỗi rồi không xoá được");
			setFoodList(foodList.filter(food => food._id !== foodId));
		} catch (err) {
			alert("Lỗi rồi không xoá được");
		}
	};

	if (isLoading)
		return (
			<div>
				<h2 style={{textAlign: "center"}}>Danh sách food</h2>
				<div>Loading ...</div>
			</div>
		);

	return (
		<div>
			<h2 style={{textAlign: "center"}}>Danh sách food</h2>
			<Table headerList={headerList}>
				{foodList.length === 0 && (
					<tr>
						<td colSpan={headerList.length} style={{textAlign: "center"}}>
							Không có food <Link to="/food/create">thêm food</Link>
						</td>
					</tr>
				)}
				{foodList.map((food, index) => (
					<tr key={food._id}>
						<td>{index}</td>
						<td>{food.name}</td>
						<td>
							<img
								style={{width: "100px", height: "70px"}}
								src={food.image}
								alt="lỗi"
							/>{" "}
						</td>
						<td>{food.description}</td>
						<td>{food.production}</td>
						<td>{food.cost}</td>
						<td>{food.unit}</td>
						<td>{food.minMass}</td>
						<td>{food.maxMass}</td>
						<td>
							<div
								style={{
									color: "#0000EE",
									textDecoration: "underline",
									cursor: "pointer",
								}}
								onClick={() => {
									handleDelete(food._id);
								}}
							>
								Xoá
							</div>
							<br />
							<Link to={`/food/update?id=${food._id}`}>Sửa</Link>
						</td>
					</tr>
				))}
			</Table>
		</div>
	);
}

export default FoodList;
