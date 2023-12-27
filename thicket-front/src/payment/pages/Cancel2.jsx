import React, {useState} from 'react';
import Cancel3 from "./Cancel3";

function Cancel2({ ticketId, ticket }) {
    const [showCancel3, setShowCancel3] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleConfirmClick = () => {
        // 입력된 텍스트가 "예매취소"인 경우에만 Confirm 처리
        if (inputValue.trim().toLowerCase() === '예매취소') {
            setShowCancel3(true);
        }
    };

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {showCancel3 ? (
                <Cancel3 ticketId={ticketId} ticket={ticket} />
            ) : (
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{
                        backgroundColor: 'lightgray',
                        color: 'black',
                        padding: '5px',
                        textAlign: 'center',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',  // 추가된 부분
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                        borderRadius: '12px',
                        width: '100%',
                    }}
                    >
                        <div>
                            <h1 style={{color: 'white'}}>취소 신청</h1>
                        </div>
                        <div>
                            <h1>확인 절차</h1>
                        </div>
                        <div>
                            <h1 style={{color: 'white'}}>취소 완료</h1>
                        </div>
                    </div>
                    <div style={{
                        width: '80%',
                        backgroundColor: 'lightgray',
                        marginTop: '10px',
                        padding: '5px',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center', // 상하 정렬
                        textAlign: 'center'   // 좌우 정렬
                    }}>
                        <div>
                            <div>비밀번호 확인</div>
                            <div>정말로 예매를 취소하시겠습니까? 취소를 원하시면 "예매취소"를 입력하세요</div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div>
                            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={handleConfirmClick}>확인</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cancel2;