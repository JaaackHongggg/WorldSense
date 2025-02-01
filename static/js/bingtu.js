
        var dom = document.getElementById('container');
        var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
        });
        var app = {};
        
        var option;

        var data = [
    {
        name: 'Knowledge',
        itemStyle: {
        color: '#84c3b7'
        },
        children: [
        {
            name: 'Humanity &\n History',
            value: 1,
            itemStyle: {
            color: '#e9eee0'
            }
        },
        {
            name: 'Literature & Art',
            value: 1,
            itemStyle: {
            color: '#ebf1b7'
            }
        },
        {
            name: 'Biology &\n Medicine',
            value: 1,
            itemStyle: {
            color: '#e2ebcf'
            }
        },
        {
            name: 'Finance &\n Commerce',
            value: 1,
            itemStyle: {
            color: '#d6e4bb'
            }
        },
        {
            name: 'Astronomy',
            value: 1,
            itemStyle: {
            color: '#eef5d9'
            }
        },
        {
            name: 'Geography',
            value: 1,
            itemStyle: {
            color: '#d5ead5'
            }
        },
        {
            name: 'Law',
            value: 1,
            itemStyle: {
            color: '#c8d6cf'
            }
        },
        {
            name: 'Life Tip',
            value: 1,
            itemStyle: {
            color: '#cadbc6'
            }
        },
        {
            name: 'Technology',
            value: 1,
            itemStyle: {
            color: '#c3dcd7'
            }
        }
        ]
    },
    {
        name: 'Film &\nTelevision',
        itemStyle: {
        color: '#71b7ed'
        },
        children: [
        {
            name: 'Animation',
            value: 1,
            itemStyle: {
            color: '#bcdff7'
            }
        },
        {
            name: 'Movie &\n TV Show',
            value: 1,
            itemStyle: {
            color: '#b4d4f9'
            }
        },
        {
            name: 'Documentary',
            value: 1,
            itemStyle: {
            color: '#c4e4ed'
            }
        },
        {
            name: 'News Report',
            value: 1,
            itemStyle: {
            color: '#cbd4f7'
            }
        }
        ]
    },
    {
        name: 'Sports\nCompetition',
        itemStyle: {
        color: '#9899ee'
        },
        children: [
        {
            name: 'Esports',
            value: 1,
            itemStyle: {
            color: '#e5e2f5'
            }
        },
        {
            name: 'Basketball',
            value: 1,
            itemStyle: {
            color: '#e7e0eb'
            }
        },
        {
            name: 'Football',
            value: 1,
            itemStyle: {
            color: '#e8dfe6'
            }
        },
        {
            name: 'Athletics',
            value: 1,
            itemStyle: {
            color: '#fce5e9'
            }
        },
        {
            name: 'Other Sports',
            value: 1,
            itemStyle: {
            color: '#efdadf'
            }
        }
        ]
    },
    {
        name: 'Artistic\nPerformance',
        itemStyle: {
        color: '#f57c6e'
        },
        children: [
        {
            name: 'Stage Play',
            value: 1,
            itemStyle: {
            color: '#ffd1d8'
            }
        },
        {
            name: 'Magic Show',
            value: 1,
            itemStyle: {
            color: '#f4bec3'
            }
        },
        {
            name: 'Variety Show',
            value: 1,
            itemStyle: {
            color: '#ffcbcd'
            }
        },
        {
            name: 'Acrobatics',
            value: 1,
            itemStyle: {
            color: '#f9c0b4'
            }
        }
        ]
    },
    {
        name: 'Life Record',
        itemStyle: {
        color: '#f2b56f'
        },
        children: [
        {
            name: 'Handicraft',
            value: 1,
            itemStyle: {
            color: '#fed5c0'
            }
        },
        {
            name: 'Food',
            value: 1,
            itemStyle: {
            color: '#ffcea2'
            }
        },
        {
            name: 'Fashion',
            value: 1,
            itemStyle: {
            color: '#faeed3'
            }
        },
        {
            name: 'Daily Life',
            value: 1,
            itemStyle: {
            color: '#fedec0'
            }
        },
        {
            name: 'Travel',
            value: 1,
            itemStyle: {
            color: '#fbe7d2'
            }
        },
        {
            name: 'Pet & Animal',
            value: 1,
            itemStyle: {
            color: '#f8f3da'
            }
        },
        {
            name: 'Exercise',
            value: 1,
            itemStyle: {
            color: '#fcecd0'
            }
        }
        ]
    },
    {
        name: '',
        itemStyle: {
        color: '#f7e16f'
        },
        children: [
        {
            name: 'Multilingual',
            value: 1,
            itemStyle: {
            color: '#fff5c3'
            }
        }
        ]
    }
    ];
    option = {
    series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
        focus: 'ancestor'
        },
        label: {
        textStyle: {
            // color: "#ffffff",
            fontSize: 12,
            // fontWeight: 'bolder',
            fontFamily: 'serif'
        }
        },
        levels: [
        {},
        {
            r0: '16%',
            r: '40%',
            itemStyle: {
            borderRadius: 6,
            borderWidth: 4
            },
            label: {
            rotate: 'tangential'
            }
        },
        {
            r0: '40%',
            r: '75%',
            itemStyle: {
            borderRadius: 6,
            borderWidth: 4
            },
            label: {
            align: 'right'
            }
        },
        {
            r0: '75%',
            r: '77%',
            label: {
            position: 'outside',
            padding: 3,
            silent: false
            },
            itemStyle: {
            // borderWidth: 3
            }
        }
        ]
    }
    };
        if (option && typeof option === 'object') {
        myChart.setOption(option);
        }

window.addEventListener('resize', myChart.resize);