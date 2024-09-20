import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import HistoryContent from "../../components/HistoryPage/HistoryContent";
import Footer from "../../components/Footer/Footer";
import DetailHistory from "../../components/HistoryPage/DetailHistory";

const History = () => {
    return (
        <div>
            <Navigation />
            <HistoryContent />
            <DetailHistory />
            <Footer />
        </div>
    );
};

export default History;