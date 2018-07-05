import React from 'react'
import Img from 'gatsby-image'
import cx from 'classnames'
import './styles.scss'

const Card = ({ id, link, title, image, description, svg }) => (
	<div className={`card card-${id}`}>
		<div className="card-header">
			<h3>{title}</h3>
		</div>
		<div className={cx('card-image', {'card-image-code': svg})}>
			{svg ? (
				<img src={image} alt={title} />
			) : (
				<Img sizes={image} alt={title} />
			)}
		</div>
		<div className="card-footer">
			<p>{description}</p>
			<a target="_blank" rel="noopener noreferrer" href={link}>Visit link</a>
		</div>
	</div>
)

export { Card }
