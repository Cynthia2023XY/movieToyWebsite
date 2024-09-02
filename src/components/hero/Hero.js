import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // 引入LanguageContext
import './Hero.css';
// 导入 react-material-ui-carousel 库中的 Carousel 组件，用于创建轮播图
import Carousel from 'react-material-ui-carousel';
// 从 @mui/material 库中导入 Paper 组件，用于创建纸张样式的容器。
import { Paper } from '@mui/material';
// 从 @fortawesome/react-fontawesome 库中导入 FontAwesomeIcon 组件，用于显示图标
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 从 @fortawesome/free-solid-svg-icons 库中导入 faCirclePlay 图
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
// 导入 Link 和 useNavigate 组件，用于导航
import { Link, useNavigate } from "react-router-dom";
// 导入 Button 组件，用于创建按钮
import Button from 'react-bootstrap/Button';

const Hero = ({ movies }) => {
	const { language, texts } = useContext(LanguageContext); // 使用LanguageContext
	const navigate = useNavigate();

	function reviews(movieId) {
        // 使用 navigate 函数导航到 /Reviews/${movieId} 路径
		navigate(`/Reviews/${movieId}`);
	}

	return (
		<div className='movie-carousel-container'>
			<Carousel>
				{
					movies?.map((movie) => {
						return (
							<Paper key={movie.imdbId}>
								<div className='movie-card-container'>
									<div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
										<div className="movie-detail">
											<div className="movie-poster">
												<img src={movie.poster} alt="" />
											</div>
											<div className="movie-title">
												<h4>
													{movie.title}
													{language === 'zh' && <><br />{movie.titleZh}</>}
												</h4>
											</div>
											<div className="movie-buttons-container">
												<Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
													<div className="play-button-icon-container">
														<FontAwesomeIcon className="play-button-icon"
															icon={faCirclePlay}
														/>
													</div>
												</Link>

												<div className="movie-review-button-container">
													<Button variant="info" onClick={() => reviews(movie.imdbId)}>{texts.reviews}</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Paper>
						)
					})
				}
			</Carousel>
		</div>
	)
}

export default Hero;

