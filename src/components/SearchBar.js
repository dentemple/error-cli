import React, { Component } from 'react';
import '../../public/stylesheet/main.css';

export default class Search extends Component {

  state = {
		query: '',
		errSearch: []
  }

  search = (query) => {
		ErrorAPI.search()
		.then((errs) => {
			this.setState(() => ({
				query,
				errs
			}))
		})
  }

  render() {
		const { query, errSearch } = this.state
      return (
				<div className="search-error">
					<div className="search-error-bar">

						<div className="search-error-input-wrapper">
							<input
								className="search-error-input-bar"
								type="text"
								onChange={(event) => this.search(event.target.value)}
								placeholder="Try To Sober Up Here..."
								value={query}
							/>
						</div>
					</div>
					<div className="search-error-results">
						<ol className="error-grid"> {
							errSearch.map((errSite) => (
								<li>
									<div>
										<p>{errSite.title}</p>
										<p>{errSite.website}</p>
									</div>
								</li>
							))}
						</ol>
				</div>
			</div>
		)
  }
}
