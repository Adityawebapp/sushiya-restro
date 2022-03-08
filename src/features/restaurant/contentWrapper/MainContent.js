
import ResMainHeader from '../ResMainHeader'
import PageContent from './PageContent'

function MainContent() {
    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <ResMainHeader />
                    {/* <!-- End of Topbar --> */}

                    <PageContent />
                    {/* <!-- /.container-fluid --> */}

                </div>


                {/* <!-- End of Main Content --> */}
               

            </div>
            {/* <!-- End of Content Wrapper --> */}
        </>
    )
}

export default MainContent
